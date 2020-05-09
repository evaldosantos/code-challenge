import { call, takeLatest, all, put, delay, take, race } from 'redux-saga/effects';
import { actionTypes, actions } from './actions';
import { sendMessage, getAllMessages } from '../services';

function* pollMessages() {
  while (true) {
    try {
      const messages = yield call(getAllMessages);
      yield put(actions.setMessages(messages));
      yield delay(1000);
    } catch (error) {
      yield put(actions.setMessagesError(error));
    }
  }
}

function* sendMessageSaga(action) {
  try {
    yield call(sendMessage, action.payload);
    // yield put(actions.sendMessageSuccess(action.payload));
  } catch (e) {
    yield put(actions.sendMessageError(e));
  }
}


function* pollWatcherSaga() {
  try {
    while (true) {
      const data = yield take(actionTypes.START_POLLING)
      yield race([call(pollMessages, data), take(actionTypes.STOP_POLLING)])
    }
  }catch(e) {
    console.log(e)
  }
  
}

function* appOffline() {
  yield put(actions.stopPolling())
}

function* appOnline() {
  yield put(actions.startPolling())
}

function* actionWatcher() {
  try {
    yield takeLatest(actionTypes.SENDMESSAGE, sendMessageSaga);
    yield takeLatest(actionTypes.OFFLINE, appOffline);
    yield takeLatest(actionTypes.ONLINE, appOnline);
    yield call(pollWatcherSaga);
  } catch(e) {
    console.log(e)
  }
  
}

export default function* mainSaga() {
  yield all([actionWatcher()]);
}

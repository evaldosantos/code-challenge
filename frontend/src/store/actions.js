const SENDMESSAGE = 'SENDMESSAGE';
const SENDMESSAGESUCCESS = 'SENDMESSAGESUCCESS';
const SENDMESSAGEERROR = 'SENDMESSAGEERROR';
const SETMESSAGES = 'SETMESSAGES';
const SETMESSAGESERROR = 'SETMESSAGES';
const ONLINE = 'ONLINE';
const OFFLINE = 'OFFLINE';
const START_POLLING = 'START_POLLING';
const STOP_POLLING = 'STOP_POLLING';

const startPolling = () => ({
  type: START_POLLING
})

const stopPolling = () => ({
  type: STOP_POLLING
})

const sendMessage = (message) => ({
  type: SENDMESSAGE,
  payload: message,
});

const sendMessageSuccess = (message) => ({
  type: SENDMESSAGESUCCESS,
  payload: message,
});

const sendMessageError = (error) => ({
  type: SENDMESSAGESUCCESS,
  payload: error,
});

const setMessages = (messages) => ({
  type: SETMESSAGES,
  payload: messages,
});

const setMessagesError = (error) => ({
  type: SETMESSAGESERROR,
  payload: error,
});

const setOnline = () => ({
  type: ONLINE,
});

const setOffline = () => ({
  type: OFFLINE,
});

export const actions = {
  setMessages,
  setMessagesError,
  setOffline,
  setOnline,
  sendMessage,
  sendMessageSuccess,
  sendMessageError,
  startPolling,
  stopPolling
};

export const actionTypes = {
  SETMESSAGES,
  SETMESSAGESERROR,
  START_POLLING,
  STOP_POLLING,
  ONLINE,
  OFFLINE,
  SENDMESSAGE,
  SENDMESSAGEERROR,
  SENDMESSAGESUCCESS,
};

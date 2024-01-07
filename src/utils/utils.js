import domainData from '../utils/domain-detail.json';

export const getEventData = () => {
  return domainData.events;
};

export const getAuthInfo = () => {
  return domainData;
};

export const formatDate = (expiresAt) => {
  const expirationDate = new Date(expiresAt);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(expirationDate);
};

export const formatEventData = (eventData) => {
  const formattedEvents = [];

  if (eventData.registered) {
    formattedEvents.push({
      label: 'Create date',
      date: eventData.registered.timestamp,
      registrar: eventData.registered.registrar_handle,
    });
  }

  if (eventData.transferred) {
    formattedEvents.push({
      label: 'Transfer date',
      date: eventData.transferred.timestamp,
      registrar: eventData.transferred.registrar_handle,
    });
  }

  if (eventData.updated) {
    formattedEvents.push({
      label: 'Update date',
      date: eventData.updated.timestamp,
      registrar: eventData.updated.registrar_handle,
    });
  }

  return formattedEvents;
};
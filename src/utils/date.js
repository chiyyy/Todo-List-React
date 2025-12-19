export const getLocalDateStr = (timestamp) => {
    const date = new Date(timestamp);
    const tzOffset = date.getTimezoneOffset() * 60000;
    return new Date(timestamp - tzOffset).toISOString().split('T')[0];
  };
  
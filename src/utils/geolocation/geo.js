/* eslint-env browser */

function getPosition(options) {
  return new Promise((res, rej) => {
    window.navigator.geolocation.getCurrentPosition(
      res,
      rej,
      options,
    );
  });
}

export default getPosition;

'use strict';

module.exports = {

  /**
   * Respond with a 200 success code and message.
   *
   * @param data
   * @param code
   * @returns
   */
  success: function(data, code) {

    if (!data) {
      throw new Error('I do not have data to return, please supply');
    }

    return {
      statusCode: code ? code : 200,
      body: JSON.stringify(data)
    }
  },

  /**
   * Response with a 404 Not found or given message.
   * the returned object is meant to have a message property
   * @param message
   * @returns
   */
  notFound: function(message) {

    return {
      statusCode: 404,
      message: message || 'Not found'
    };
  },

  /**
   * Response with a 307 Temporary Redirect to different url.
   *
   * @param url
   * @returns
   */
  redirect: function(url, statusCode) {
    if (!url) {
      throw new Error('Please provide a redirect url');
    }

    return {
      statusCode: statusCode || 307,
      headers: {
        Location: url
      }
    };
  },

  /**
   * Response with a generic 400 code or a passed in statusCode.
   *
   * @param err
   * @returns obj
   */
  error: function(err) {

    err = err || null;

    console.error(err);

    return {
      statusCode: err && err.statusCode ? err.statusCode : 400,
      body: JSON.stringify({
        'message': err && err.message ? err.message : err,
        'errors': err && err.errors ? err.errors : null
      })
    };
  }
};

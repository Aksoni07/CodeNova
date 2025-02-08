class AppError {
  constructor(message, statusCode) {
    this.message = message; 
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

//file defines a custom error-handling class, AppError, which extends the built-in JavaScript

export enum StCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    SERVER_ERROR = 500,
}

export enum MSG {
    OK = "Request completed successfully",
    CREATED = "Resource created successfully",
    BAD_REQUEST = "Invalid request",
    NOT_FOUND = "Resource not found",
    UNAUTHORIZED = "Authentication required",
    SERVER_ERROR = "Something went wrong",
}
  
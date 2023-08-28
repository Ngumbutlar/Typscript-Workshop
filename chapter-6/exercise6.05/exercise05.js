"use strict";
const errorMessage = {
    400: " bad request",
    401: " unauthorized",
    403: "forbidden", apiId: 123456
};
const errorCodes = [
    400, 401, 403
];
errorCodes.forEach((code) => {
    console.log(errorMessage[code]);
});

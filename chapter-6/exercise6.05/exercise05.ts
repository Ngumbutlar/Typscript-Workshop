
interface ErroeMessage {
    //can only be string | number | symbol
    [msg: number]: string;
    apiId: number
}
const errorMessage: ErroeMessage = {
    400: " bad request",
    401: " unauthorized",
    403: "forbidden", apiId: 123456
};

const errorCodes: number []= [
    400, 401, 403
];
errorCodes.forEach(
    (code: number) => {
        console.log(
            errorMessage[code]
        );
    }
);
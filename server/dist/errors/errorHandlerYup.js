import { ValidationError } from 'yup';
const errorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        const errors = [];
        err.inner.forEach((e) => {
            errors.push({
                path: e.path,
                message: e.message,
            });
        });
        return res.status(400).json({ errors });
    }
    return next(err);
};
export default errorHandler;
//# sourceMappingURL=errorHandlerYup.js.map
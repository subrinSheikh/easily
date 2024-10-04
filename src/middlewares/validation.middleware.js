import { body, validationResult } from "express-validator";
export const validateRequest = async (req, res, next) => {
    // 1.rules
    const rules = [
        body('name').notEmpty().withMessage(`Name is required`),
        body('email').notEmpty().withMessage(`Email is required`),
        body('password')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
            .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
            .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
            .matches(/[0-9]/).withMessage('Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    ];
    // 2.run rules
    await Promise.all(rules.map(rule => rule.run(req)));

    // 3.check the errors
    var validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        if(req.path==='/register'){
            return res.render('register', { err: validationErrors.array()[0].msg})

        }
        // else if(req.path==='/login'){
        //     return res.render('login', { err: validationErrors.array()[0].msg})

        // }
    }

    next();

}
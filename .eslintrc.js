module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "semi" : ["error", "always"],
        "quotes" : ["error", "single"],
        "no-trailing-spaces" : ["error", {
            "skipBlankLines": true,
            "ignoreComments" : true
        }]
        
    }
};

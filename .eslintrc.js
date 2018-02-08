module.exports = {
    "extends": ["airbnb-base", "plugin:flowtype/recommended"],
    "plugins": [
        "flowtype"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules", "src/"]
            }
        }
    },
    "rules": {
        "import/prefer-default-export": 0,
        "no-console": 0,
        "consistent-return": 0,
        "indent": 0,
        "eol-last": 0,
        "linebreak-style": 0,
        "no-unused-vars": 0,
        "flowtype/no-types-missing-file-annotation": 0
    }
};
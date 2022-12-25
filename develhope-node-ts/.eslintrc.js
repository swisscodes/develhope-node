module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    env: {
        node: true,
    },
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                "no-undef": "off",
            },
        },
        {
            files: ["*.test.ts"],
            env: {
                node: true,
                jest: true,
            },
        },
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-inferrable-types": "off",
    },
};

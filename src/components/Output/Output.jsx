import { useEffect, useState } from 'react';

function Output({ expression }) {
    const [output, setOutput] = useState(0)

    const indexOperator = (expression) => {
        for (let i = 0; i < expression.length; i++) {
            if (['*', '/', '+', '-'].includes(expression[i])) return i;
        }
        return -1;
    }

    const buildExpressionTree = (expression) => {
        const index = indexOperator(expression);

        if (index < 0) return { value: expression };
        else {
            const operator = expression[index];
            return {
                value: operator,
                left: buildExpressionTree(expression.slice(0, index).trim()),
                right: buildExpressionTree(expression.slice(index + 1).trim()),
            };
        }
    }

    const evaluateExpression = (node) => {
        if (!node) return 0;

        if (!isNaN(node.value)) return parseFloat(node.value);

        let leftValue = evaluateExpression(node.left);
        let rightValue = evaluateExpression(node.right);

        switch (node.value) {
            case '+':
                return leftValue + rightValue;
            case '-':
                return leftValue - rightValue;
            case '*':
                return leftValue * rightValue;
            case '/':
                return leftValue / rightValue;
            default:
                return 0;
        }
    }

    useEffect(() => {
        const tree = buildExpressionTree(expression.replace(/\s+/g, ''));
        const result = evaluateExpression(tree)
        setOutput(result)
    }, [expression])

    return (
        output ? <p>{expression} = {output}</p> : null
    )
}

export default Output

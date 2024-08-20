$(document).ready(function () {

    const $result = $('#result');
    $result.val('0');

    $('.btn').on('click', function () {
        const keysValue = $(this).text();

        if (keysValue === 'AC') {
            clearResult();
        } else if (keysValue === '=') {
            calculateResult();
        } else {
            appendValue(keysValue);
        }
    });

    function clearResult() {
        $result.val('0');
    }

    function calculateResult() {
        try {
            let evaluatedResult = eval($result.val());
            $result.val(parseFloat(evaluatedResult.toFixed(10)));
        } catch (error) {
            $result.val('Error');
        }
    }

    function appendValue(keysValue) {
        if ($result.val() === '0' && keysValue !== '.') {
            $result.val(keysValue);
        } else {
            $result.val($result.val() + keysValue);
        }
    }
});
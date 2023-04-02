let array = [1, 2, 3];

array = new Proxy(array, {
    /* ваш код */
});

alert( array[-1] );
alert( array[-2] );
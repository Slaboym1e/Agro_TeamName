ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.154, 61.4291],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        })

        // Создаём макет содержимого.
        // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        // ),
        //
        // myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        //     hintContent: 'Собственный значок метки',
        //     balloonContent: 'Это красивая метка'
        // }, {
        //     // Опции.
        //     // Необходимо указать данный тип макета.
        //     iconLayout: 'default#image',
        //     // Своё изображение иконки метки.
        //     iconImageHref: 'images/myIcon.gif',
        //     // Размеры метки.
        //     iconImageSize: [30, 42],
        //     // Смещение левого верхнего угла иконки относительно
        //     // её "ножки" (точки привязки).
        //     iconImageOffset: [-5, -38]
        // }),
        //
        // myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        //     hintContent: 'Собственный значок метки с контентом',
        //     balloonContent: 'А эта — новогодняя',
        //     iconContent: '12'
        // }, {
        //     // Опции.
        //     // Необходимо указать данный тип макета.
        //     iconLayout: 'default#imageWithContent',
        //     // Своё изображение иконки метки.
        //     iconImageHref: 'images/ball.png',
        //     // Размеры метки.
        //     iconImageSize: [48, 48],
        //     // Смещение левого верхнего угла иконки относительно
        //     // её "ножки" (точки привязки).
        //     iconImageOffset: [-24, -24],
        //     // Смещение слоя с содержимым относительно слоя с картинкой.
        //     iconContentOffset: [15, 15],
        //     // Макет содержимого.
        //     iconContentLayout: MyIconContentLayout
        // });
     // Создаем многоугольник без вершин.
    var myPolygon = new ymaps.Polygon([], {}, {
        // Курсор в режиме добавления новых вершин.
        editorDrawingCursor: "crosshair",
        // Максимально допустимое количество вершин.
        editorMaxPoints: 5,
        // Цвет заливки.
        fillColor: 'rgba(108,168,255,0.47)',
        // Цвет обводки.
        strokeColor: 'rgba(113,113,255,0.59)',
        // Ширина обводки.
        strokeWidth: 5
    });
    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);

    // В режиме добавления новых вершин меняем цвет обводки многоугольника.
    var stateMonitor = new ymaps.Monitor(myPolygon.editor.state);
    stateMonitor.add("drawing", function (newValue) {
        myPolygon.options.set("strokeColor", newValue ? '#62aeff' : '#9191ff');
    });

    // Включаем режим редактирования с возможностью добавления новых вершин.
    myPolygon.editor.startDrawing();

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
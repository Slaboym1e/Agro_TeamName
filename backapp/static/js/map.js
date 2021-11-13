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
    //////////////////////////////////////////////////////////////////////////

    let getoobjects=[];




            myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.153395, 61.398763]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 65',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject);


          console.log(getoobjects);
        myGeoObject1 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.153406, 61.399230]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 63Вк1',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject1);
        myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.152845, 61.399140]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 65/1',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject2);
            myGeoObject3 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.152562, 61.398888]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 65А',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject3);
            myGeoObject4 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.153406, 61.399230]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 63Вк1',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject4);
            myGeoObject5 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.151718, 61.399167]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 73/1',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject5);
            myGeoObject6 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.151343, 61.399050]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 73',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject6);
            myGeoObject7 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.150967, 61.399167]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 75',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject7);
            myGeoObject8 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.150587, 61.399086]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 77',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject8);
            myGeoObject9 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.149892, 61.399149]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 79',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject9);
            myGeoObject10 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.149177, 61.399185]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 81А',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject10);
            myGeoObject11 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.149033, 61.399922]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'улица Елькина, 81Б',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject11);
            myGeoObject12 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.149414, 61.399975]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent1: 'улица Елькина, 81',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
        });getoobjects.push(myGeoObject12);
    for (let i in getoobjects)
    { // выведет 0, затем 1, затем 2
         myMap.geoObjects.add(getoobjects[i]);

    }

//     myMap.geoObjects
//         .add(myGeoObject)
//         .add(myGeoObject1)
//         .add(myGeoObject2)
//         .add(myGeoObject3)
//         .add(myGeoObject4)
//         .add(myGeoObject5)
//         .add(myGeoObject6)
//         .add(myGeoObject7)
//         .add(myGeoObject8)
//         .add(myGeoObject9)
//         .add(myGeoObject10)
//         .add(myGeoObject11)
//         .add(myGeoObject12);
//         //.add(myGeoObject13)
//         //.add(myGeoObject14)
//         //.add(myGeoObject1)
//        // .add(myPlacemark)
//         //.add(myPlacemarkWithContent);
});
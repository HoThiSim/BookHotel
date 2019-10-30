var ListProduct = [{
        id: 1,
        name: 'Mường Thanh',
        price: 250000,
        source: '101B Lê Hữu Trác',
        image: './img/anh.jpg',
        quantityOder: 0
    },
    {
        id: 2,
        name: 'Hoàng Đại II',
        price: 150000,
        source: '1118 Ngô Quyền',
        image: './img/anh1.jpg',
        quantityOder: 0
    },
    {
        id: 3,
        name: 'OYO',
        price: 100000,
        source: '27 Nguyễn Văn Thoại',
        image: './img/anh2.jpg',
        quantityOder: 0,
    },
    {
        id: 4,
        name: 'Ánh Dương',
        price: 300000,
        source: '12 Võ Văn Kiệt',
        image: './img/anh3.jpg',
        quantityOder: 0
    },
    {
        id: 5,
        name: 'Green Hotel',
        price: 200000,
        source: '22 Hùng Vương',
        image: './img/anh4.jpg',
        quantityOder: 0
    },
    {
        id: 6,
        name: 'Big D',
        price: 300000,
        source: '103 Ông Ích Khiêm',
        image: './img/anh5.jpg',
        quantityOder: 0
    },
    {
        id: 7,
        name: 'Ngủ ngon',
        price: 400000,
        source: '99 Tô Hiến Thành',
        image:'./img/anh6.jpg',
        quantityOder: 0
    }
]
var listBooking = [];
function loaddata() {
    var i = 0;
    ListProduct.forEach(function(element) {
        try {
            var ttnam = document.getElementById("ttnam");
            ttnam.innerHTML += '<div class=" col-3" id="id"><div class="card"><div class="img"><img class="card-img-top" src="' + element.image + '" id="img" alt=""></div><div class="card-body"><h5 class="card-title" id="title">' + element.name + '</h5><span><p><span id="source">' + element.source + '</span></p><p><span id="price">' + element.price + " VNĐ" + '</span><p></p><button class="btn btn-success" onclick="addListBook(' + i + ')" data-toggle="modal" data-target="#exampleModalCenter" id="buttonOder">Đặt phòng</button><button class="btn btn-dark" data-toggle="modal" id="buttonChiTiet"><a href="chitiet.html">Xem chi tiết</a> </button></div></div></div>'
            i++;
        } catch {}
    });
}
function addListBook(x) {
    if (listBooking.length == 0) {
        listBooking.push(ListProduct[x]);
        listBooking[listBooking.length - 1].quantityOder += 1;
        console.log("added " + listBooking[listBooking.length - 1].id);
        alert("Phòng của khách sạn " + ListProduct[x].name + " đã được thêm vào ListBook, click vào ListBook để thành toán");
    } else {
        var k = 0;
        listBooking.forEach(function(element) {
            if (element.id == ListProduct[x].id) {
                element.quantityOder += 1;
                console.log("added " + ListProduct[x].id);
                alert("Phòng của khách sạn " + ListProduct[x].name + " đã được thêm vào ListBook, click vào ListBook để thành toán");
                k = 1;
            }
        });
        if (k == 0) {
            listBooking.push(ListProduct[x]);
            listBooking[listBooking.length - 1].quantityOder += 1;

            console.log("added " + listBooking[listBooking.length - 1].id);
            alert("Phòng của khách sạn " + ListProduct[x].name + " đã được thêm vào ListBook, click vào ListBook để thành toán");
        }
    }
}

function home() {
    document.getElementById("main").style.display = 'block';
    document.getElementById("listBooking").style.display = 'none';
}
function loadListBook() {
    document.getElementById("listBooking").style.display = 'block';
    document.getElementById("main").style.display = 'none';
    var tb = document.getElementById("listData");
    var x = tb.rows.length;
    while (--x) {
        tb.deleteRow(x);
    }
    for (var i = 0; i < listBooking.length; i++) {
        if (listBooking[i] != null) {
            var r = tb.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();
            var cell3 = r.insertCell();
            var cell4 = r.insertCell();
            var cell5 = r.insertCell();
            var cell6 = r.insertCell();
            var cell7 = r.insertCell();
            cell1.innerHTML = listBooking[i].name;
            cell2.innerHTML = listBooking[i].source;
            cell3.innerHTML = '<div class="table-img"><img class="card-img-top" src="' + listBooking[i].image + '" id="img" alt=""></div>';
            cell4.innerHTML = listBooking[i].price * listBooking[i].quantityOder;
            x -= 1;
            cell5.innerHTML = '<div><input type="number" name="quantity" onchange="caculateSum()" value="' + listBooking[i].quantityOder + '"></div>'
            cell6.innerHTML = '<button class="btn btn-danger" onclick="deleteDisplay(' + x + '),deleteData(' + i + ') ">Xóa</button>';
            cell7.innerHTML = '<button class="btn btn-danger" onclick="addListBook(' + x + ') "><a href="chitiet2.html">Thanh toán</a></button>';
        }
    }
}
function deleteDisplay(x) {
    var tb = document.getElementById("listData");
    tb.deleteRow(x);
}
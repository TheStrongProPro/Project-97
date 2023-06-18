document.getElementById("user_name").innerHTML =
    "Welcome " + localStorage.getItem("user_name") + " !";

var firebaseConfig = {
    apiKey: "AIzaSyAdxg4F2GYApewddFmMMtsRaOQ7Pw0Wboc",

    authDomain: "letschat-dfe1d.firebaseapp.com",

    databaseURL: "https://letschat-dfe1d-default-rtdb.firebaseio.com",

    projectId: "letschat-dfe1d",

    storageBucket: "letschat-dfe1d.appspot.com",

    messagingSenderId: "699140663279",

    appId: "1:699140663279:web:999e5e2f37551705a9b81a",
};

// Initialize Firebase
//#ffca28

firebase.initializeApp(firebaseConfig);

function getData() {
    firebase
        .database()
        .ref("/")
        .on("value", function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row =
                    "<div class='room_name' id='" +
                    Room_names +
                    "' onclick='redirectToRoomName(this.id)'>#" +
                    Room_names +
                    "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name",
    });
    localStorage.setItem("room_name", room_name);
    window.location = "page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "page.html";
}

function logout() {
    localStorage.removeItem('user_name')
    localStorage.removeItem('room_name')
    window.location = 'index.html'
}
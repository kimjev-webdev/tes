function initMap() {
  const businessLocation = { lat: 45.44110705149633, lng: 9.220700957234282 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: businessLocation,
  });

  const logoIcon = {
    url: "/static/images/map_pin.webp", // Make sure this matches the actual file path
    scaledSize: new google.maps.Size(90, 120), // You can adjust this to match your design
    anchor: new google.maps.Point(45, 110)
  };

  new google.maps.Marker({
    position: businessLocation,
    map: map,
    icon: logoIcon,
    title: "The English Studio"
  });
}

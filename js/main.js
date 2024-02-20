
// ----main-js-----

$(document).ready(function() {
    $("#main-bars").click(function() {
        $("div.display-screen").toggle();
    });
});



$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.prev_arrow',
  nextArrow: '.next_arrow',
responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    }
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
]
});

$('.center').slick({
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll:3,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});

$(document).ready(function () {
  $('.color-input').change(function () {
      var selectedColor = $(this).val(); 
      var associatedDisplay = $(this).siblings('.color-display'); 
      associatedDisplay.text(selectedColor); 
  });
});



// =========== add new fields =========
// const selectContainer = document.getElementById("select-container");
// const addSelectButton = document.getElementById("add-select-button");
// let selectCount = 0;

// addSelectButton.addEventListener("click", function () {
//     selectCount++;

//     const newSelect = document.createElement("select");
//     newSelect.id = `select-${selectCount}`;

//     const option1 = document.createElement("option");
//     option1.value = "Gastronomy";
//     option1.text = "Gastronomy";
//     newSelect.appendChild(option1);

//     const option2 = document.createElement("option");
//     option2.value = "Hotels";
//     option2.text = "Hotels";
//     newSelect.appendChild(option2);

//     const option3 = document.createElement("option");
//     option3.value = "Events";
//     option3.text = "Events";
//     newSelect.appendChild(option3);

//     const option4 = document.createElement("option");
//     option4.value = "Retail";
//     option4.text = "Retail";
//     newSelect.appendChild(option4);

//     const option5 = document.createElement("option");
//     option5.value = "Services";
//     option5.text = "Services";
//     newSelect.appendChild(option5);


//     selectContainer.appendChild(newSelect);
// });

//  =========== graph ==========
  var ctx = document.getElementById('myLineChart').getContext('2d');
  var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Sample Line Chart',
      borderColor: 'blue',
      data: [65, 75, 15, 20, 25, 30, 40, 20, 150],
      fill: false,
    }]
  };
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
  });


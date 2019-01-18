document.addEventListener("DOMContentLoaded", ()=>{
      let p1 = 5;
      let p2 = 10;
      let p3 = 5;

      let ctx = (<HTMLCanvasElement>document.getElementById('canv')).getContext('2d');

      setInterval(()=>{
        if (p1 == 5) {
          p1 = 15;
          p2 = 15;
        } else {
          p1 = 5;
          p2 = 5;
        }

        let chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                  label: "My First dataset",
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [p1, p2, p3],
              }]
          },

          // Configuration options go here
          options: {}
      });
      }, 1000);
    });
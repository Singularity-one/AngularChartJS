import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../Data';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.css']
})
export class ChartJsComponent implements OnInit {
  
  title = 'Ng7ChartJs By DotNet Techy';
  
  data: Data[];
  month = [];
  price = [];

  LineChart=[];
  BarChart=[];
  PieChart=[];
  DoughnutChart=[];
  RadarChart=[];
  HorizontalBarChart=[];
  PolarAreaChart=[];
  BubbleChart=[];
  ChartDataLabels=[];
  url = 'http://localhost:4000/datasets'


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    // Line chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.LineChart = new Chart('LineChart', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              // data: this.price,
              data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
              borderColor: "red",
              fill: false
            }
          ]
        },
        options: {
          title:{
            text:"Line Chart",
            display:true
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
      console.dir("Line chart:"+this.LineChart);
    });

    // Bar chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.BarChart  = new Chart('BarChart', {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              // data: this.price,
              data: [9,7 , 3, 5, 2, 10],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }
          ]
        },
        options: {
          title:{
            text:"Bar Chart",
            display:true
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
      console.dir("Bar chart:"+this.BarChart);
    });

    // pie chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.PieChart = new Chart('PieChart', {
        type: 'pie',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              // data: this.price,
              data: [9,7 , 3, 5, 2, 10],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }
          ]
        },
        options: {
          title:{
              text:"Pie Chart",
              display:true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
         }
         });
      console.dir("pie chart:"+this.PieChart);
    });



    // doughnut chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.DoughnutChart = new Chart('DoughnutChart', {
        type: 'doughnut',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              // data: this.price,
              data: [9,7 , 3, 5, 2, 10],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }
          ]
        },
        options: {
          title:{
              text:"Doughnut Chart",
              display:true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
         }
         });
      console.dir("doughnut chart:"+this.DoughnutChart);
    });
    

    // RadarChart chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.RadarChart = new Chart('RadarChart', {
        type: 'radar',
        data: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
          datasets: [
            {
              label: "My First dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: ['rgba(105, 0, 132, .2)',],
                borderColor: ['rgba(200, 99, 132, .7)',],
                borderWidth: 2
            },
            {
              label: "My Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: ['rgba(0, 250, 220, .2)',],
                borderColor: ['rgba(0, 213, 132, .7)',],
                borderWidth: 2
            }
          ]
        },
        options: {
          title:{
              text:"RadarChart Chart",
              display:true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
         }
         });
      console.dir("RadarChart chart:"+this.RadarChart);
    });


    // HorizontalBarChart chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
          res.forEach(y => {
            this.month.push(y.month);
            this.price.push(y.price);
          });
          this.HorizontalBarChart = new Chart('HorizontalBarChart', {
            type: 'horizontalBar',
            data: {
              labels: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [22, 33, 55, 12, 86, 23, 14],
                  fill: false,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', 
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)', 
                    'rgba(75, 192, 192, 0.2)', 
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)', 
                    'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)', 
                    'rgb(255, 159, 64)', 
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)', 
                    'rgb(54, 162, 235)', 
                    'rgb(153, 102, 255)', 
                    'rgb(201, 203, 207)'
                  ],
                  borderWidth: 1
                  }
              ]
            },
            options: {
              title:{
                  text:"HorizontalBarChart Chart",
                  display:true
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
             }
             });
          console.dir("HorizontalBarChart chart:"+this.HorizontalBarChart);
    });

    // PolarAreaChart chart:
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.PolarAreaChart = new Chart('PolarAreaChart', {
        type: 'polarArea',
        data: {
          labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
            {
              data: [300, 50, 100, 40, 120],
              backgroundColor: [
                "rgba(219, 0, 0, 0.1)", 
                "rgba(0, 165, 2, 0.1)", 
                "rgba(255, 195, 15, 0.2)",
                "rgba(55, 59, 66, 0.1)", 
                "rgba(0, 0, 0, 0.3)"
              ],
              hoverBackgroundColor: [
                "rgba(219, 0, 0, 0.2)", 
                "rgba(0, 165, 2, 0.2)",
                "rgba(255, 195, 15, 0.3)", 
                "rgba(55, 59, 66, 0.1)", 
                "rgba(0, 0, 0, 0.4)"
              ]
              }
          ]
        },
        options: {
          title:{
              text:"PolarAreaChart Chart",
              display:true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
         }
         });
      console.dir("PolarAreaChart chart:"+this.PolarAreaChart);
});



// Bubble chart:
this.httpClient.get(this.url).subscribe((res: Data[]) => {
  res.forEach(y => {
    this.month.push(y.month);
    this.price.push(y.price);
  });
  this.BubbleChart = new Chart('BubbleChart', {
    type: 'bubble',
    data: {
      //labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          label: 'John',
            data: [{
              x: 3,
              y: 7,
              r: 10
            }],
          backgroundColor: "#ff6384",
          hoverBackgroundColor: "#ff6384"
          }, 
        {
          label: 'Peter',
            data: [{
              x: 5,
              y: 7,
            r: 10
            }],
          backgroundColor: "#44e4ee",
          hoverBackgroundColor: "#44e4ee"
          }, 
        {
          label: 'Donald',
            data: [{
              x: 7,
              y: 7,
              r: 10
            }],
          backgroundColor: "#62088A",
          hoverBackgroundColor: "#62088A"
          }
      ]
    },
    options: {
      title:{
          text:"Bubble Chart",
          display:true
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
     }
     });
  console.dir("Bubble chart:"+this.BubbleChart);
});



  // Chart with labels:
  this.httpClient.get(this.url).subscribe((res: Data[]) => {
    res.forEach(y => {
      this.month.push(y.month);
      this.price.push(y.price);
    });
    this.ChartDataLabels = new Chart('ChartDataLabels', {
      type: 'pie',
      data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [210, 130, 120, 160, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      },options: {
        //右邊說明
        responsive: true,
        legend: {
          position: 'right',
          labels: {
            padding: 20,
            boxWidth: 10
          }
        }
      },plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            
            
          }
        },
        color: 'white',
        labels: {
          title: {
            font: {
              size: '16'
            }
          }
        }
      }




    });
});


    



  }

}

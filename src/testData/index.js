/**
 * 1) Data structure can be different, lets assume measurement is running for all nodes
 *    at the same time but differently for each station, thus we can save nodes inside each timestamp
 * 2)
 */

const data = {
  stations: {
    345200003424333: {
      measurements: {
        1511622101000: {
          nodes: {
            D800066: {
              ti: 26.2,
              tsi: 22.2,
              te: 12.3,
              tse: 11
            },
            D700007: {
              ti: 21.2,
              tsi: 12.2,
              te: 12.3,
              tse: 10.1
            },
            D900009: {
              ti: 26.2,
              tsi: 22.2,
              te: 12.3,
              tse: 11.2
            },
          }
        },
        1512622101000: {
          nodes: {
            D800066: {
              ti: 16.2,
              tsi: 25.2,
              te: 5.7,
              tse: 19
            },
            D700007: {
              ti: 21.2,
              tsi: 12.2,
              te: 14.3,
              tse: 18.1
            },
            D900009: {
              ti: 46.2,
              tsi: 32.2,
              te: 52.3,
              tse: 61.2
            },
          }
        },
        1517622101000: {
          nodes: {
            D800066: {
              ti: 36.1,
              tsi: 11.2,
              te: 15.7,
              tse: 9
            },
            D700007: {
              ti: 11.2,
              tsi: 17.2,
              te: 19.3,
              tse: 13.1
            },
            D900009: {
              ti: 11.7,
              tsi: 1.2,
              te: 34.3,
              tse: 6.2
            },
          }
        },
      }
    },
    745200003424222: {
      measurements: {
        1513682179000: {
          nodes: {
            C800066: {
              ti: 26.2,
              tsi: 22.2,
              te: 11.3,
              tse: 18
            },
            C700007: {
              ti: 31.2,
              tsi: 12.2,
              te: 12.3,
              tse: 11.1
            },
            C900009: {
              ti: 56.2,
              tsi: 12.2,
              te: 12.3,
              tse: 21.2
            },
          }
        },
        1515682179000: {
          nodes: {
            C800066: {
              ti: 16.2,
              tsi: 25.2,
              te: 5.7,
              tse: 19
            },
            C700007: {
              ti: 21.2,
              tsi: 12.2,
              te: 34.3,
              tse: 18.1
            },
            C900009: {
              ti: 46.2,
              tsi: 32.2,
              te: 52.3,
              tse: 61.2
            },
          }
        },
        1529682179000: {
          nodes: {
            C800066: {
              ti: 36.1,
              tsi: 11.2,
              te: 15.7,
              tse: 9
            },
            C700007: {
              ti: 11.2,
              tsi: 17.2,
              te: 19.3,
              tse: 13.1
            },
            C900009: {
              ti: 11.7,
              tsi: 1.2,
              te: 34.3,
              tse: 6.2
            },
          }
        }
      }
    }
  }
};

export default data;

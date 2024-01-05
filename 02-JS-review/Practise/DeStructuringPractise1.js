// const data = [
//     {
//       id: 1,
//       title: "The Lord of the Rings",
//       publicationDate: "1954-07-29",
//       author: "J. R. R. Tolkien",
//       genres: [
//         "fantasy",
//         "high-fantasy",
//         "adventure",
//         "fiction",
//         "novels",
//         "literature",
//       ],
//       hasMovieAdaptation: true,
//       pages: 1216,
//       translations: {
//         spanish: "El señor de los anillos",
//         chinese: "魔戒",
//         french: "Le Seigneur des anneaux",
//       },
//       reviews: {
//         goodreads: {
//           rating: 4.52,
//           ratingsCount: 630994,
//           reviewsCount: 13417,
//         },
//         librarything: {
//           rating: 4.53,
//           ratingsCount: 47166,
//           reviewsCount: 452,
//         },
//       },
//     },
//     {
//       id: 2,
//       title: "The Cyberiad",
//       publicationDate: "1965-01-01",
//       author: "Stanislaw Lem",
//       genres: [
//         "science fiction",
//         "humor",
//         "speculative fiction",
//         "short stories",
//         "fantasy",
//       ],
//       hasMovieAdaptation: false,
//       pages: 295,
//       translations: {},
//       reviews: {
//         goodreads: {
//           rating: 4.16,
//           ratingsCount: 11663,
//           reviewsCount: 812,
//         },
//         librarything: {
//           rating: 4.13,
//           ratingsCount: 2434,
//           reviewsCount: 0,
//         },
//       },
//     },
//     {
//       id: 3,
//       title: "Dune",
//       publicationDate: "1965-01-01",
//       author: "Frank Herbert",
//       genres: ["science fiction", "novel", "adventure"],
//       hasMovieAdaptation: true,
//       pages: 658,
//       translations: {
//         spanish: "",
//       },
//       reviews: {
//         goodreads: {
//           rating: 4.25,
//           ratingsCount: 1142893,
//           reviewsCount: 49701,
//         },
//       },
//     },
//     {
//       id: 4,
//       title: "Harry Potter and the Philosopher's Stone",
//       publicationDate: "1997-06-26",
//       author: "J. K. Rowling",
//       genres: ["fantasy", "adventure"],
//       hasMovieAdaptation: true,
//       pages: 223,
//       translations: {
//         spanish: "Harry Potter y la piedra filosofal",
//         korean: "해리 포터와 마법사의 돌",
//         bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//         portuguese: "Harry Potter e a Pedra Filosofal",
//       },
//       reviews: {
//         goodreads: {
//           rating: 4.47,
//           ratingsCount: 8910059,
//           reviewsCount: 140625,
//         },
//         librarything: {
//           rating: 4.29,
//           ratingsCount: 120941,
//           reviewsCount: 1960,
//         },
//       },
//     },
//     {
//       id: 5,
//       title: "A Game of Thrones",
//       publicationDate: "1996-08-01",
//       author: "George R. R. Martin",
//       genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//       hasMovieAdaptation: true,
//       pages: 835,
//       translations: {
//         korean: "왕좌의 게임",
//         polish: "Gra o tron",
//         portuguese: "A Guerra dos Tronos",
//         spanish: "Juego de tronos",
//       },
//       reviews: {
//         goodreads: {
//           rating: 4.44,
//           ratingsCount: 2295233,
//           reviewsCount: 59058,
//         },
//         librarything: {
//           rating: 4.36,
//           ratingsCount: 38358,
//           reviewsCount: 1095,
//         },
//       },
//     },
//   ];

// function getBooks() {
//     return data;
//   }
  
// function getBook(id) {
//     return data.find((d) => d.id === id);
//   }

//get books from object data in getBooks function
//const books = getBooks();


const ticketArray = ["08/28/2023 #1112668 Anna Agadzhanyan, Glendale, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "08/28/2023 Platform Fee Policy -$1.15", "07/03/2023 #1087367 Amy Taylor, Los Angeles, CA Order Payment: $75.00 Insurance Policy 2.0: -$1.19 General Liability Policy: -$2.00 Total Payment: $71.81", "07/03/2023 Platform Fee Policy -$1.15", "06/26/2023 #1083870 Rosa Arnone, Los Angeles, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "06/26/2023 #1083898 Sheri Horn, Beverly Hills, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "06/26/2023 #1084564 Chris Yu, Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "06/26/2023 #1084735 Alan Carter, Los Angeles, CA Order Payment: $95.00 Insurance Policy 2.0: -$1.51 General Liability Policy: -$2.00 Total Payment: $91.49", "06/26/2023 Platform Fee Policy -$1.15", "06/19/2023 #1080594 Cynthia Gumbs, Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "06/19/2023 Platform Fee Policy -$1.15", "06/08/2023 #1074466 Denise Oller, Chatsworth, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "06/08/2023 Platform Fee Policy -$1.15", "06/05/2023 #1072118 Holly Workman, Pasadena, CA Order Payment: $72.00 Insurance Policy 2.0: -$1.14 General Liability Policy: -$2.00 Total Payment: $68.86", "06/05/2023 #1074142 Simone Miller, Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "06/05/2023 #1074271 Eleanor Krawcheck, Los Angeles, CA Order Payment: $72.00 Insurance Policy 2.0: -$1.14 General Liability Policy: -$2.00 Total Payment: $68.86", "06/05/2023 Platform Fee Policy -$1.15", "06/01/2023 #1071339 Lya Lim, Los Angeles, CA Order Payment: $97.80 Insurance Policy 2.0: -$1.55 General Liability Policy: -$2.00 Total Payment: $94.25", "06/01/2023 #1071340 Nate Loakes, Moorpark, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "06/01/2023 Platform Fee Policy -$1.15", "05/29/2023 #1070992 Hung Diep, San Gabriel, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "05/29/2023 Platform Fee Policy -$1.15", "05/25/2023 #1068319 Talar Sarkis, Los Angeles, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "05/25/2023 Platform Fee Policy -$1.15", "05/22/2023 #1067196 Ashley Earnest, Los Angeles, CA Order Payment: $253.00 Insurance Policy 2.0: -$4.02 General Liability Policy: -$2.00 Total Payment: $246.98", "05/22/2023 Platform Fee Policy -$1.15", "05/18/2023 #1066853 Elizabeth Fleming, Simi Valley, CA Order Payment: $135.00 Insurance Policy 2.0: -$2.14 General Liability Policy: -$2.00 Total Payment: $130.86", "05/18/2023 #1066854 William Y Lee, Tarzana, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "05/18/2023 Platform Fee Policy -$1.15", "05/15/2023 #1062985 Emma Oganesyan, Burbank, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "05/15/2023 #1063591 Juliana Truesdale, Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "05/15/2023 #1064097 Joe Reyes, Monrovia, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "05/15/2023 Platform Fee Policy -$1.15", "05/11/2023 #1061812 Lawrence Tepper, Agoura Hills, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "05/11/2023 Platform Fee Policy -$1.15", "05/08/2023 #1059702 Darryl Williams , Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "05/08/2023 #1060409 Karen Roberts, Downey, CA Order Payment: $70.00 Insurance Policy 2.0: -$1.11 General Liability Policy: -$2.00 Total Payment: $66.89", "05/08/2023 #1060745 Robert Markovic, Los Angeles, CA Order Payment: $72.00 Insurance Policy 2.0: -$1.14 General Liability Policy: -$2.00 Total Payment: $68.86", "05/08/2023 #1060771 Joyce Love, Northridge, CA Order Payment: $110.00 Insurance Policy 2.0: -$1.74 General Liability Policy: -$2.00 Total Payment: $106.26", "05/08/2023 #1060933 David Abrams, Northridge, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "05/08/2023 Platform Fee Policy -$1.15", "05/04/2023 #1058068 Christian Echeagaray, Los Angeles, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "05/04/2023 Platform Fee Policy -$1.15", "04/24/2023 #1053457 Lisa Ubabuko, Los Angeles, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/24/2023 Platform Fee Policy -$1.15", "04/19/2023 #1050500 Daniel Lynch, Burbank, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/19/2023 #1050730 Steven Weiss, Van Nuys, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "04/19/2023 Platform Fee Policy -$1.15", "04/17/2023 #1048640 Michael Blackman , Woodland Hills, CA Order Payment: $70.00 Insurance Policy 2.0: -$1.11 General Liability Policy: -$2.00 Total Payment: $66.89", "04/17/2023 #1048684 Aliyah Germany, Gardena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/17/2023 #1048955 Cameron Squires, Culver City, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/17/2023 #1048958 Jonathan Shao, Whittier, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/17/2023 #1050179 Peter Hill, Burbank, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/17/2023 #1050230 Ryan Hobbs, Inglewood, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/17/2023 #1050432 William Davis, Sherman Oaks, CA Order Payment: $75.00 Insurance Policy 2.0: -$1.19 General Liability Policy: -$2.00 Total Payment: $71.81", "04/17/2023 Platform Fee Policy -$1.15", "04/13/2023 #1047658 Bob Basi, Woodland Hills, CA Order Payment: $131.10 Insurance Policy 2.0: -$2.08 General Liability Policy: -$2.00 Total Payment: $127.02", "04/13/2023 #1048222 Geoffrey Miles, Venice, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "04/13/2023 Platform Fee Policy -$1.15", "04/10/2023 #1044364 Mildred Murcio, Los Angeles, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "04/10/2023 #1044984 Christine Rodriguez, La Mirada, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "04/10/2023 #1045040 Latesha Thomas, Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "04/10/2023 #1046471 Melanie Johnson, North Hollywood, CA Order Payment: $70.00 Insurance Policy 2.0: -$1.11 General Liability Policy: -$2.00 Total Payment: $66.89", "04/10/2023 Platform Fee Policy -$1.15", "04/06/2023 #1042796 Vanessa Martinez, Arcadia, CA Order Payment: $135.60 Insurance Policy 2.0: -$2.15 General Liability Policy: -$2.00 Total Payment: $131.45", "04/06/2023 #1044072 Sophie Greaves, Sunland, CA Order Payment: $75.00 Insurance Policy 2.0: -$1.19 General Liability Policy: -$2.00 Total Payment: $71.81", "04/06/2023 Platform Fee Policy -$1.15", "04/03/2023 #1042227 Vanessa Martinez, Arcadia, CA $176.30", "03/30/2023 #1037371 Dan Patterson, Hawthorne, CA Order Payment: $129.30 Insurance Policy 2.0: -$2.05 General Liability Policy: -$2.00 Total Payment: $125.25", "03/30/2023 Platform Fee Policy -$1.15", "03/27/2023 #1031646 James Ratkovich, Altadena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "03/27/2023 #1034539 Silva Dilanchian , Glendale, CA Order Payment: $65.00 Insurance Policy 2.0: -$1.03 General Liability Policy: -$2.00 Total Payment: $61.97", "03/27/2023 #1034790 Angela Watson, Pasadena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "03/27/2023 #1036247 Dennis Lamar, Pasadena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "03/27/2023 Platform Fee Policy -$1.15", "03/23/2023 #1035913 Robin Hugg, Los Angeles, CA Order Payment: $75.00 Insurance Policy 2.0: -$1.19 General Liability Policy: -$2.00 Total Payment: $71.81", "03/23/2023 Platform Fee Policy -$1.15", "03/20/2023 #1026326 Luis Gutierrez, Pasadena, CA Order Payment: $70.00 Insurance Policy 2.0: -$1.11 General Liability Policy: -$2.00 Total Payment: $66.89", "03/20/2023 #1034059 Sanford S Williams, Pasadena, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "03/20/2023 Platform Fee Policy -$1.15", "03/16/2023 #1030777 Jackie Ellis, Altadena, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "03/16/2023 #1030867 Linda Randall, Pasadena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 General Liability Policy: -$2.00 Total Payment: $57.05", "03/16/2023 Platform Fee Policy -$1.15", "03/13/2023 #1027158 Lisa Eisler, Sherman Oaks, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "03/13/2023 #1029772 Brooke Yap, Glendale, CA Order Payment: $179.40 Insurance Policy 2.0: -$2.85 General Liability Policy: -$2.00 Total Payment: $174.55", "03/13/2023 Platform Fee Policy -$1.15", "03/06/2023 #1022689 Pamela Latukefu, Glendale, CA Order Payment: $131.10 Insurance Policy 2.0: -$2.08 General Liability Policy: -$2.00 Total Payment: $127.02", "03/06/2023 #1024400 Mayra Cabrera, Glendale, CA Order Payment: $149.10 Insurance Policy 2.0: -$2.37 General Liability Policy: -$2.00 Total Payment: $144.73", "03/06/2023 Platform Fee Policy -$1.15", "03/02/2023 #1017460 James Wright, Pasadena, CA Order Payment: $360.00 Insurance Policy 2.0: -$5.72 General Liability Policy: -$2.00 Total Payment: $352.28", "03/02/2023 #1020180 Christopher Cottam, North Hollywood, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "03/02/2023 Platform Fee Policy -$1.15", "02/27/2023 #1018186 Nima Khalilian, Los Angeles, CA Order Payment: $176.30 Insurance Policy 2.0: -$2.80 General Liability Policy: -$2.00 Total Payment: $171.50", "02/27/2023 Platform Fee Policy -$1.15", "02/23/2023 #1010445 John Russell, Pasadena, CA Order Payment: $351.70 Insurance Policy 2.0: -$5.59 General Liability Policy: -$2.00 Total Payment: $344.11", "02/23/2023 Platform Fee Policy -$1.15", "02/13/2023 #1006621 James Curran, Los Angeles, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "02/13/2023 Platform Fee Policy -$1.15", "02/09/2023 #1002831 Karen Subbiondo, Glendale, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 General Liability Policy: -$2.00 Total Payment: $22.61", "02/09/2023 #1006490 Sam Cones, Glendale, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 General Liability Policy: -$2.00 Total Payment: $47.21", "02/09/2023 #1007736 Liam Miller, Glendale, CA Order Payment: $149.10 Insurance Policy 2.0: -$2.37 General Liability Policy: -$2.00 Total Payment: $144.73", "02/09/2023 Platform Fee Policy -$1.15", "02/06/2023 #1000697 Karyn Klein, South Pasadena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "02/06/2023 #1005993 Theresa Ruiz, Sun Valley, CA Order Payment: $70.00 Insurance Policy 2.0: -$1.11 Total Payment: $68.89", "02/06/2023 #1005997 Michael Philip, Burbank, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "02/06/2023 #1006004 Royce Jones, Van Nuys, CA Order Payment: $91.00 Insurance Policy 2.0: -$1.44 Total Payment: $89.56", "02/06/2023 Platform Fee Policy -$1.15", "01/30/2023 #999112 Vigen Minassian, Burbank, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "01/30/2023 Platform Fee Policy -$1.15", "01/23/2023 #993513 Will Lee, Toluca Lake, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 Total Payment: $24.61", "01/23/2023 #995542 J Ohn Love, La Canada Flintridge, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 Total Payment: $49.21", "01/23/2023 Platform Fee Policy -$1.15", "01/19/2023 #992463 Shyam Rao, Pasadena, CA Order Payment: $72.00 Insurance Policy 2.0: -$1.14 Total Payment: $70.86", "01/19/2023 #993754 Robert Vallejo, Los Angeles, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "01/19/2023 Platform Fee Policy -$1.15", "01/16/2023 #988421 Steve Hirsch, Encino, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 Total Payment: $24.61", "01/16/2023 Platform Fee Policy -$1.15", "01/12/2023 #987914 Anjelica Molina, Los Angeles, CA Order Payment: $72.00 Insurance Policy 2.0: -$1.14 Total Payment: $70.86", "01/12/2023 #988131 Margaretha Kloots, Monrovia, CA Order Payment: $70.00 Insurance Policy 2.0: -$1.11 Total Payment: $68.89", "01/12/2023 #988701 Veer Shergill, Burbank, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "01/12/2023 #989750 Karen Campos , La Crescenta, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "01/12/2023 #989776 Kimberly Spencer, Burbank, CA Order Payment: $64.00 Insurance Policy 2.0: -$1.01 Total Payment: $62.99", "01/12/2023 Platform Fee Policy -$1.15", "01/09/2023 #985309 Frances Mciver, Los Angeles, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 Total Payment: $24.61", "01/09/2023 #987324 Amanda Speights, Pasadena, CA Order Payment: $97.80 Insurance Policy 2.0: -$1.55 Total Payment: $96.25", "01/09/2023 #987525 Vladimir Oge, Pasadena, CA Order Payment: $60.00 Insurance Policy 2.0: -$0.95 Total Payment: $59.05", "01/09/2023 Platform Fee Policy -$1.15", "01/05/2023 #979612 Gen Esaki, La Crescenta, CA Order Payment: $72.00 Insurance Policy 2.0: -$1.14 Total Payment: $70.86", "01/05/2023 #982702 Natalie Epstein, Los Angeles, CA Order Payment: $113.10 Insurance Policy 2.0: -$1.79 Total Payment: $111.31", "01/05/2023 #982773 Regina Ferberdino, Van Nuys, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 Total Payment: $49.21", "01/05/2023 #986057 William Stewart, Glendale, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 Total Payment: $49.21", "01/05/2023 Platform Fee Policy -$1.15", "01/02/2023 #980084 Paige Long, Valley Village, CA Order Payment: $25.00 Insurance Policy 2.0: -$0.39 Total Payment: $24.61", "01/02/2023 #981079 Mark Fish, Los Angeles, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 Total Payment: $49.21", "01/02/2023 #981319 Karen Schoenrock, Tujunga, CA Order Payment: $50.00 Insurance Policy 2.0: -$0.79 Total Payment: $49.21", "01/02/2023 Platform Fee Policy -$1.15"];

const ticketFinanceInfo = ticketArray[0].split('CA ')[1];
const filteredFI = ticketFinanceInfo.split(" ");

//console.log(ticketFinanceInfo);

//trim out the initial ticket details and keep ticket payment detail
function trimOut(t){
  return t.split(" ");
};
//example
const finance = trimOut(ticketFinanceInfo);
finance

const orderPaymentAmount = filteredFI.slice(0,3);
const insurancePolicyAmount = filteredFI.slice(3,7);
const generalLiabilityAmount = filteredFI.slice(7,11);
const totalPaymentAmount = filteredFI.slice(11,14);
let opa = [];
let ipa = [];
let gla = [];
let tpa = [];

function organize(f){
  opa = f.slice(0,3);
  ipa = f.slice(3,7);
  gla = f.slice(7,11);
  tpa = f.slice(11,14);
};

const processed = organize(finance);
opa
ipa
gla
tpa

const orderPayment = orderPaymentAmount.splice(0,2).join(" ");
const insurancePolicy = insurancePolicyAmount.splice(0,3).join(" ");
const generalLiability = generalLiabilityAmount.splice(0,3).join(" ");
const totalPayment = totalPaymentAmount.splice(0,2).join(" ");
op = [];
ip = [];
gl = [];
tp = [];

function categorize(o,i,g,t){
  op = o.splice(0,2).join(" ");
  ip = i.splice(0,3).join(" ");
  gl = g.splice(0,3).join(" ");
  tp = t.splice(0,2).join(" ");
}
const category = categorize(opa,ipa,gla,tpa);
op
ip
gl
tp

opa
ipa
gla
tpa





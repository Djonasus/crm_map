
// // 344405
// // UF_CRM_1650442073068 - Дата выезда - неактуально
// // UF_CRM_1650457115 - Адрес абонента
// // STAGE_ID - UC_DKJ4BU

// // DATE_CREATE
// // IS_NEW


// const date = new Date(Date.UTC(2023, 7, 1));

// function find_deal() {
//     var id = prompt("Введите ID");
//     BX24.callMethod(
//         "crm.deal.get",
//         { id: id },
//         function(result)
//         {
//             if(result.error())
//                 console.error(result.error());
//             else
//                 console.dir(result.data());
//         }
//     );
// }

// // BX24.callMethod(
// //     "crm.deal.list",
// //     {
// //         order: { "STAGE_ID": "ASC" },
// //         filter: { "STAGE_ID":"UC_DKJ4BU", ">DATE_CREATE" : date},
// //         select: [ "ID", "TITLE", "STAGE_ID", "PROBABILITY", "OPPORTUNITY", "CURRENCY_ID" ]
// //     },
// //     function(result) 
// //     {
// //         if(result.error())
// //             console.error(result.error());
// //         else
// //         {
// //             console.dir(result.data());
// //             if(result.more())
// //                 result.next();
// //         }
// //     }
// // );

alert("hello world!")
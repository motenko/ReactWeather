// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Boston', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Boston').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
      resolve(parseInt(a) + parseInt(b));
    } else {
      reject('{a} or {b} is not a number');
    }
  });
}

addPromise('fred', 5).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});

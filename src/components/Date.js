import React from 'react';

// Returns padded version of string (e.g. 2 => 02, 23 => 23)
const twoDigitString = (original) => parseInt(original) < 10 ? "0" + original : original;

// Returns easier to read data (DD/MM/YYYY)
const Date = ({date}) => {
  const dateParts = date.split("-");
  dateParts[1] = twoDigitString(dateParts[1]);
  dateParts[2] = twoDigitString(dateParts[2]);

  return <div>{dateParts[2]}/{dateParts[1]}/{dateParts[0]}</div>
}

export default Date;
const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

    return oldestAge < currentAge ? currentPerson : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

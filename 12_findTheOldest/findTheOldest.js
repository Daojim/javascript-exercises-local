const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(
      oldestPerson.yearOfDeath,
      oldestPerson.yearOfBirth
    );
    const currentAge = getAge(
      currentPerson.yearOfDeath,
      currentPerson.yearOfBirth
    );
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  });
};

const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;

function distanceFromHqInBlocks(number) {
  if (number > 42) {
    return number - 42;
  } else if (number < 42) {
    return 42 - number;
  }
}

function distanceFromHqInFeet(number1) {
  if (number1 > 42) {
    return (number1 - 42) * 264;
  } else if (number1 < 42) {
    return (42 - number1) * 264;
  }
}

function distanceTravelledInFeet(distance, destination) {
  if (distance < destination) {
    let result = distance - destination;
    return Math.abs(result) * 264;
  }
  if (destination < distance) {
    let positive = Math.abs(distance - destination);
    return positive * 264;
  }
}

function calculatesFarePrice(start, destination) {
  if (start > destination || start < destination) {
    if (Math.abs((start - destination) * 264) < 400) {
      return 0;
    }
  }
  //----------Middle One

  //----------One before the last
  if (
    Math.abs(destination - start * 264) > 2000 ||
    Math.abs(start - destination * 264) < 2500
  ) {
    return 25;
  }
  //--------------------------------Last One
  if (start > destination) {
    let result = start - destination;
    if (result * 264 > 2500) {
      return "cannot travel that far";
    }
  }

  if (start < destination) {
    let result = destination - start;
    if (result * 264 > 2500) {
      return "cannot travel that far";
    }
  }
}

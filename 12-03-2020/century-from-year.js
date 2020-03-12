function century(year) {
    const century = Math.floor(year / 100);
    const decade = year % 100;
    
    if (decade > 0) {
        return century + 1;
    } else {
        return century;
    }
}



// centuryFromYear(1705)  return (18)
// centuryFromYear(1900)  return (19)
// centuryFromYear(1601)  return (17)
// centuryFromYear(2000)  return (20)
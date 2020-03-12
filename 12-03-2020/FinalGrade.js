function finalGrade(gradeExam, projectsCount) {
    let studentGrade = 0;

    if (gradeExam > 90 || projectsCount > 10) {
        return 100;
    } else if (gradeExam > 75 && projectsCount >= 5) {
        return 90;
    } else if (gradeExam > 50 && projectsCount >= 2) {
        return 75;
    } else {
        return 0;
    }
}

function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
  }
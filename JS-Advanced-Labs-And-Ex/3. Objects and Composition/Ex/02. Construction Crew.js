function ex02(object) {
    if (object.dizziness) {
        object.levelOfHydrated += object.weight * object.experience * 0.1;
        object.dizziness = false;
    }
    return object;
}
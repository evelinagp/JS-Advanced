function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(persent) {
            this.population += Math.floor(this.population * (persent / 100));
        },
        applyRecession(persent) {
            this.treasury -= Math.ceil(this.treasury * (persent / 100));
        }
    };
    return result;
}
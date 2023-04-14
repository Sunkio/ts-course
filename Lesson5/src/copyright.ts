// Original JS code => TS doesn't like it
/*
const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
 */

// First variation
let year: HTMLElement | null = document.getElementById("year")
let thisYear: string
thisYear = new Date().getFullYear().toString()
if (year) {
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear
}

// Second Variation
const year2 = document.getElementById("year") as HTMLSpanElement
const thisYear2: string = new Date().getFullYear().toString()
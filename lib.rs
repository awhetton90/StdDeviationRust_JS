
extern crate neon;
#[macro_use]
extern crate neon_serde;

extern crate serde_derive;

use neon::prelude::*;

export! {
    fn std_deviation(pop_val: Vec<f64>) -> f64 {
        let mut summation = 0.0;
        let mean;
        let pop_std_dev:f64;
        let pop_size = pop_val.len();

        /* Make sure the population size value is valid */
        if pop_size == 0 {
            return -1.0;
        }

        mean = pop_val.iter().sum::<f64>() / pop_size as f64;

        /* Work through summation of (Xi-u)^2 */
        for popval in pop_val.iter(){
            summation += f64::powf(popval-mean, 2.0);
        }

        pop_std_dev = summation / (pop_size - 1) as f64;

        return pop_std_dev.sqrt();
    }
}

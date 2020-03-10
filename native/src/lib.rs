extern crate neon;
extern crate neon_serde;
extern crate serde_derive;

use neon::prelude::*;


fn std_deviation(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let mut summation = 0.0;
    let mean;
    let pop_buf: Handle<JsBuffer> = cx.argument(0)?;

    let pop_std_dev:f64 = {
        let muxguard = cx.lock();
        let pop_data = pop_buf.borrow(&muxguard);
        let pop_slice = pop_data.as_slice::<f64>();
        let pop_size = pop_slice.len();

        mean = pop_slice.iter().sum::<f64>() / pop_size as f64;

        /* Work through summation of (Xi-u)^2 */
        for popval in pop_slice.iter(){
            summation += f64::powf(popval-mean, 2.0);
        }

        summation / (pop_size - 1) as f64
    };

    Ok(cx.number(pop_std_dev.sqrt()))
}

register_module!(mut cx, {
    cx.export_function("std_deviation", std_deviation)
});

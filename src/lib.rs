#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}

use sha2::{Sha256, Digest};
use wasm_bindgen::prelude::*;

fn hex_digest(data: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.input(data.as_bytes());
    let signature = hasher.result();
    signature
        .as_ref()
        .iter()
        .map(|b| format!("{:X}", b))
        .collect::<String>()
}

#[wasm_bindgen]
pub extern "C" fn digest(data: String) -> String {
    hex_digest(&data)
}

#[wasm_bindgen]
pub extern "C" fn digest_attch(data: String, elem_id: String) -> Result<(), JsValue> {
    web_sys::window().map_or(Err("No window find".into()), | win | {
        if let Some(doc) = win.document() {
            doc.get_element_by_id(&elem_id).map_or(Err(format!("No 
            element with id {} found", elem_id).into()), | val | {
                let signature = hex_digest(&data);
                val.set_inner_html(&signature);
                Ok(())
            })
        } else {
            Err("No document find".into())
        }
    })
}

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    Ok(())
}
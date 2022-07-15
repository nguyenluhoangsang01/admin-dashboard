import React, { useRef } from "react";
import HeaderFooterPage from "../layout/pages";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const ColorPicker = () => {
  const previewRef = useRef(null);

  const change = (color) => {
    previewRef.current.style.backgroundColor = color.currentValue.hex;
  };

  return (
    <HeaderFooterPage category="app" title="Color Picker">
      <div className="text-center">
        <div id="preview" ref={previewRef} />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </HeaderFooterPage>
  );
};

export default ColorPicker;

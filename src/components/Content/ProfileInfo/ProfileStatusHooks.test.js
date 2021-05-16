import React, { useState } from "react";
import { create, act } from "react-test-renderer";
import ProfileStatusHook from './ProfileStatusHooks';

describe("ProfileStatusHook", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatusHook status="it-kamasutra.com" />);
    
    expect(component.state.status).toBe("it-kamasutra.com");
  });
});




- When creating a unit test file, use a setup function that is invoked in each test block instead of using beforeEach type methods.
Example files:
    - src/app/services/cart.service.spec.ts
    - src/app/app.component.spec.ts
- Test blocks use positive assumptions for test descriptions for example, it('displays the table data') instead of it('should display the table data')
- Use the angular testing library to render components instead of TestBed
- Unit tests should test from the public API of the code under test instead of directly invoking class methods. 
- There should be no logic inside the unit tests
- All stateful objects should be either passed into the setup function or created inside the setup function and returned from the setup function
- No global test objects
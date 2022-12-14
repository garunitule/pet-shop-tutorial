const Adoption = artifacts.require("Adoption");

// accounts: prepared accounts for test
contract("Adoption", (accounts) => {
    let adoption;
    let expectedAdopter;

    before(async () => {
        adoption = await Adoption.deployed();
    });

    describe("adopting a pet and retrieving acount addresses", async () => {
        before("adopt a pet using accounts[0]", async () => {
            await adoption.adopt(8, {from: accounts[0]});
            expectedAdopter = accounts[0];
        });

        it("can fetch the address of an owner by pet id", async () => {
            const adopter = await adoption.adopters[8];
            // adopterがundefinedになってる。
            assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be the first account.");
            // assert.equal(adopter, "0xA6c0faB42E1429c7D17Fc27EcF04E3416d40c231", "hogehoge");
            // assert.equal(expectedAdopter, "0xA6c0faB42E1429c7D17Fc27EcF04E3416d40c231", "hogehoge");
        });

        it("can fetch the collection of all pet owners", async () => {
            const adopters = await adoption.getAdopters();
            assert.equal(adopters[8], expectedAdopter, "The owner of the adopted pet should be in the collection.");
        });
    });
});
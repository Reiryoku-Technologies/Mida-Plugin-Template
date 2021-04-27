import { MidaSymbolPeriod } from "#periods/MidaSymbolPeriod";
import { MidaTimeframeType } from "#periods/MidaTimeframeType";
import { MidaSymbolQuotationPriceType } from "#quotations/MidaSymbolQuotationPriceType";

describe("MidaSymbolPeriod", () => {
    const bidPeriod: MidaSymbolPeriod = new MidaSymbolPeriod({
        symbol: "TEST",
        startTime: new Date(),
        priceType: MidaSymbolQuotationPriceType.BID,
        open: 10,
        high: 50,
        low: 3,
        close: 25,
        volume: 3232,
        timeframe: MidaTimeframeType.H4,
    });

    describe(".ohlc", () => {
        it("is set correctly", () => {
            expect(bidPeriod.ohlc[0]).toBe(bidPeriod.open);
            expect(bidPeriod.ohlc[1]).toBe(bidPeriod.high);
            expect(bidPeriod.ohlc[2]).toBe(bidPeriod.low);
            expect(bidPeriod.ohlc[3]).toBe(bidPeriod.close);
        });
    });

    describe(".ohlcv", () => {
        it("is set correctly", () => {
            expect(bidPeriod.ohlcv[0]).toBe(bidPeriod.open);
            expect(bidPeriod.ohlcv[1]).toBe(bidPeriod.high);
            expect(bidPeriod.ohlcv[2]).toBe(bidPeriod.low);
            expect(bidPeriod.ohlcv[3]).toBe(bidPeriod.close);
            expect(bidPeriod.ohlcv[4]).toBe(bidPeriod.volume);
        });
    });

    describe(".timeframe", () => {
        it("is set correctly", () => {
            expect(bidPeriod.timeframe).toBe(14400);
        });
    });

    describe(".body", () => {
        it("is set correctly", () => {
            expect(bidPeriod.body).toBe(15);
        });
    });
});

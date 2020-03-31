'use strict';
import { expect } from 'chai';
import { PostFinanceCheckout } from '../index';

let macVersion: number = 1;
let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    mac_version: macVersion,
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
}

// Transaction Service
let transactionService: PostFinanceCheckout.api.TransactionService = new PostFinanceCheckout.api.TransactionService(config);

// TransactionPaymentPage Service
let transactionPaymentPageService: PostFinanceCheckout.api.TransactionPaymentPageService = new PostFinanceCheckout.api.TransactionPaymentPageService(config);

// TransactionPaymentPage Service
let paymentMethodService: PostFinanceCheckout.api.PaymentMethodService = new PostFinanceCheckout.api.PaymentMethodService(config);

// default line item for tests
let lineItem: PostFinanceCheckout.model.LineItemCreate = new PostFinanceCheckout.model.LineItemCreate();
lineItem.name='Red T-Shirt';
lineItem.uniqueId='5412';
lineItem.sku='red-t-shirt-123';
lineItem.quantity=1;
lineItem.amountIncludingTax=3.50;
lineItem.type=PostFinanceCheckout.model.LineItemType.PRODUCT;

// default transaction for tests
let transaction: PostFinanceCheckout.model.TransactionCreate = new PostFinanceCheckout.model.TransactionCreate();
transaction.lineItems=[lineItem];
transaction.autoConfirmationEnabled=true;
transaction.currency='EUR';

describe('TransactionPaymentPageService', () => {
    describe('paymentPageUrl', () => {
        it('expect a string', function(done: any) {
            transactionService.create(spaceId, transaction).then(function (response: any) {
                let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
                transactionPaymentPageService.paymentPageUrl(spaceId, <number> transactionCreate.id).then(function (response: any) {
                    let pageUrl: string = response.body;
                    expect(pageUrl).to.be.a('string');
                    done();
                });
            });
        });
    });

    describe('paymentPageUrl_Reject', () => {
        it('expect a request to fail', function(done) {
            transactionService
            .create(spaceId + Math.ceil(Math.random() * 10), transaction)
            .then(function (response: any) {
                // this function should not run
                let transactionCreate: Wallee.model.Transaction = response.body;
                transactionPaymentPageService.paymentPageUrl(spaceId, <number> transactionCreate.id).then(function (response: any) {
                    let pageUrl: string = response.body;
                    expect(pageUrl).to.be.a('string');
                    done();
                });
            }).catch(function (error: any) {
                expect(error.errorType).to.equal("ClientError");
                done();
            });
        });
     });
});


describe('PaymentMethodService', () => {
    describe('all', () => {
        it('Should count payment methods to be greater than one', function(done: any) {
            paymentMethodService.all().then(function (response: any) {
                let variable: Array<PostFinanceCheckout.model.PaymentMethod> = response.body;
                expect(variable.length).to.greaterThan(0);
                done();
            });
        });
    });
});

describe('TransactionService', () => {

    describe('count', () => {
        it('Should count 1 transaction', function(done: any) {
            transactionService.create(spaceId, transaction).then(function (response: any) {
                let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
                let entityQueryFilter: PostFinanceCheckout.model.EntityQueryFilter = new PostFinanceCheckout.model.EntityQueryFilter();
                entityQueryFilter.fieldName = 'id';
                entityQueryFilter.value = transactionCreate.id;
                entityQueryFilter.type = PostFinanceCheckout.model.EntityQueryFilterType.LEAF;
                entityQueryFilter.operator = PostFinanceCheckout.model.CriteriaOperator.EQUALS;
                transactionService.count(spaceId, entityQueryFilter).then(function (response: any) {
                    let transactionCount: number = response.body;
                    expect(transactionCount).to.equal(1);
                    done();
                });
            });
        });
    });

    describe('create', () => {
        it('transaction.state should be an instance of TransactionState', function(done: any) {
            transactionService.create(spaceId, transaction).then(function (response: any) {
                let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
                expect(transactionCreate.state).to.equal(PostFinanceCheckout.model.TransactionState.PENDING);
                done();
            });
        });
    });

    describe('read', () => {
        it('transaction.state should be an instance of TransactionState', function (done: any) {
            transactionService.create(spaceId, transaction).then(function (response: any) {
                let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
                transactionService.read(spaceId, <number>transactionCreate.id).then(function (response: any) {
                    let transactionRead = response.body;
                    expect(transactionRead.state).to.equal(PostFinanceCheckout.model.TransactionState.PENDING);
                    done();
                });
            });
        });
    });

    describe('search', () => {
        it('transaction.state should be an instance of TransactionState', function (done: any) {
            transactionService.create(spaceId, transaction).then(function (response) {
                let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
                let entityQueryFilter: PostFinanceCheckout.model.EntityQueryFilter = new PostFinanceCheckout.model.EntityQueryFilter();
                entityQueryFilter.fieldName = 'id';
                entityQueryFilter.value = transactionCreate.id;
                entityQueryFilter.type = PostFinanceCheckout.model.EntityQueryFilterType.LEAF;
                entityQueryFilter.operator = PostFinanceCheckout.model.CriteriaOperator.EQUALS;
                let entityQuery = new PostFinanceCheckout.model.EntityQuery();
                entityQuery.filter = entityQueryFilter;
                transactionService.search(spaceId, entityQuery).then(function (response: any) {
                    let transactionSearch: Array<PostFinanceCheckout.model.Transaction> = response.body;
                    transactionSearch.forEach(function (entry) {
                        expect(entry.state).to.equal(PostFinanceCheckout.model.TransactionState.PENDING);
                    });
                    done();
                });
            });
        });
    });

    describe('update', () => {
        it('transactionUpdate.language should equal to en-US', function (done: any) {
            transactionService.create(spaceId, transaction).then(function (response) {
                let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
                transactionCreate.language = 'en-US';
                transactionService.update(spaceId, <PostFinanceCheckout.model.TransactionPending> transactionCreate).then(function (response: any) {
                    let transactionUpdate: PostFinanceCheckout.model.Transaction = response.body;
                    expect(transactionUpdate.language).to.equal('en-US');
                    done();
                });
            });
        });
    });

});
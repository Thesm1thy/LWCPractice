public with sharing class AccountDisplayController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByName(String accountName) {
        if (String.isBlank(accountName)) {
            return new List<Account>();
        }
        String searchKey = '%' + accountName + '%';
        return [SELECT Id, Name FROM Account WHERE Name LIKE :searchKey];
    }
}

declare const _default: "// transfer\nconst sender = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst recipient = '5F2PCyGDWGDJyLRV15NrBsEa9Y61BS1dfAwzbfk7yR6DBm7P';\n\nconst nonce = await api.query.system.accountNonce(ALICE),\n\nconsole.log('Current nonce', nonce);\n\nconst unsub = await api.tx.balances\n  .transfer(recipient,12345)\n  .signAndSend(sender, ({ events = [], status }) => {\n    console.log('Transaction status:', status.type);\n\n    if (status.isInBlock) {\n      console.log('Completed at block hash', status.asInBlock.toHex());\n      console.log('Events:');\n\n      events.forEach(({ phase, event: { data, method, section } }) => {\n        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());\n      });\n\n      unsub();\n    }\n  });";
export default _default;
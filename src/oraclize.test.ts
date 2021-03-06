/* eslint-disable @typescript-eslint/no-non-null-assertion*/
import test from 'ava'
import { oraclize } from './oraclize'

test('oraclize is executed.', async (t) => {
	const res = await oraclize({
		signatureOptions: { address: 'account', id: 'signature', message: 'data' },
		query: { allData: '{}', publicSignature: 'dummy-public-signature' } as any,
		network: 'mainnet',
	})
	t.is(res!.message, 'data')
	t.is(res!.status, 0)
	t.is(res!.statusMessage, 'mainnet dummy-public-signature')
})

test('returns `empty` as the message property when the passed signatureOptions is undefined', async (t) => {
	const res = await oraclize({
		query: { allData: '{}', publicSignature: 'dummy-public-signature' } as any,
		network: 'mainnet',
	})
	t.is(res!.message, 'empty')
	t.is(res!.status, 0)
	t.is(res!.statusMessage, 'mainnet dummy-public-signature')
})

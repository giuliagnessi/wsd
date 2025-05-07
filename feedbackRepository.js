// feedbackRepository.js

const kv = await Deno.openKv();

const getCount = async (value) => {
  const key = ["feedbacks", String(value)];
  const res = await kv.get(key);
  return res.value ?? 0;
};

const incrementCount = async (value) => {
  const key = ["feedbacks", String(value)];
  const current = (await kv.get(key)).value ?? 0;
  const updated = current + 1;
  await kv.set(key, updated);
  return updated;
};

export { getCount, incrementCount };

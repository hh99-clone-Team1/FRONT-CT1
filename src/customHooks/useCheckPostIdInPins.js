import useGetPins from './useGetPins';

function useCheckPostIdInPins(userId, postId) {
  const { pins } = useGetPins(userId);
  const pin = pins?.find(({ postId: pinId }) => String(pinId) === postId);
  return { pinId: pin?.pinId ?? '', isContained: !!pin };
}

export default useCheckPostIdInPins;
